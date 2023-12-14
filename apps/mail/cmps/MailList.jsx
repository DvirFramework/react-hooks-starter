import { MailPreview } from "./MailPreview.jsx"
const { Link } = ReactRouterDOM
export function MailList({ mails, onUpdateMail }) {
  const ulProps = {
    className: "mail-list , mail-list-main-layout"
  }
  return (
    <ul {...ulProps}>
      {mails.map((mail) => (
        <li key={mail.id}>
          <MailPreview mail={mail} onUpdateMail={onUpdateMail} />
        </li>
      ))}
    </ul>
  )
}
