import DashboardUI from '../../components/Fragments/DashboardUI'
import { useDocumentTitle } from '../../hooks/useDocumentHandler'

export default function NotificationsPage() {
  useDocumentTitle('Notifications')
  return (
    <>
      <DashboardUI.Main.Header>
        <DashboardUI.Title title="Notifications Page" />
      </DashboardUI.Main.Header>
      <DashboardUI.Main.Body>Nothing</DashboardUI.Main.Body>
    </>
  )
}
