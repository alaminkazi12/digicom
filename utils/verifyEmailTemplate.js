const verifyEmailTemplate = ({ name, verifyEmailUrl }) => {
  return `<p>Dear ${name}</p>
  <p>Thank you for registering Digicom</p>
  <a href=${verifyEmailUrl} style="color:white; background:blue: margin-top : 10px">Verify Email</a>`;
};

export default verifyEmailTemplate;
