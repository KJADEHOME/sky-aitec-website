const nodemailer = require("nodemailer");

function sanitize(value) {
  return String(value || "").replace(/[<>]/g, "").trim();
}

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

    if (body.company_website) {
      return res.status(200).json({ ok: true });
    }

    const name = sanitize(body.name);
    const contact = sanitize(body.contact);
    const organization = sanitize(body.organization);
    const projectType = sanitize(body.projectType);
    const stage = sanitize(body.stage);
    const timeline = sanitize(body.timeline);
    const message = sanitize(body.message);

    if (!name || !contact || !projectType || !message) {
      return res.status(400).json({ error: "请填写联系人、联系方式、需求方向和项目说明。" });
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.exmail.qq.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = requiredEnv("SMTP_USER");
    const smtpPass = requiredEnv("SMTP_PASS");
    const contactTo = process.env.CONTACT_TO || "bonnie@sky-aitec.com";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass
      }
    });

    const submittedAt = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai" });
    const subject = `SKY官网业务咨询：${projectType} - ${name}`;
    const text = [
      "SKY 官网收到新的业务咨询：",
      "",
      `联系人：${name}`,
      `联系方式：${contact}`,
      `单位/机构：${organization || "未填写"}`,
      `需求方向：${projectType}`,
      `项目阶段：${stage || "未填写"}`,
      `预算/时间：${timeline || "未填写"}`,
      `提交时间：${submittedAt}`,
      "",
      "项目说明：",
      message
    ].join("\n");

    await transporter.sendMail({
      from: `"SKY 官网咨询" <${smtpUser}>`,
      to: contactTo,
      replyTo: contact.includes("@") ? contact : undefined,
      subject,
      text
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "提交失败，请稍后再试或直接发送邮件。" });
  }
};
