import DashboardUI from '../../components/Fragments/DashboardUI'
import { useDocumentTitle } from '../../hooks/useDocumentHandler'

export default function SettingsPage() {
  useDocumentTitle('Settings')
  return (
    <>
      <DashboardUI.Main.Header>
        <DashboardUI.Title title="Settings Page" />
      </DashboardUI.Main.Header>
      <DashboardUI.Main.Body>Nothing</DashboardUI.Main.Body>
    </>
  )
}
