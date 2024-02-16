import DashboardUI from '../../components/Fragments/DashboardUI'
import { useDocumentTitle } from '../../hooks/useDocumentHandler'

export default function TimesPage() {
  useDocumentTitle('Times')
  return (
    <>
      <DashboardUI.Main.Header>
        <DashboardUI.Title title="Times Page" />
      </DashboardUI.Main.Header>
      <DashboardUI.Main.Body>Nothing</DashboardUI.Main.Body>
    </>
  )
}
