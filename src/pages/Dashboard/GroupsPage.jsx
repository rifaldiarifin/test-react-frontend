import DashboardUI from '../../components/Fragments/DashboardUI'
import { useDocumentTitle } from '../../hooks/useDocumentHandler'

export default function GroupsPage() {
  useDocumentTitle('Groups')
  return (
    <>
      <DashboardUI.Main.Header>
        <DashboardUI.Title title="Groups Page" />
      </DashboardUI.Main.Header>
      <DashboardUI.Main.Body>Nothing</DashboardUI.Main.Body>
    </>
  )
}
