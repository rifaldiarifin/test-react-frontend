import DashboardUI from '../../components/Fragments/DashboardUI'
import { useDocumentTitle } from '../../hooks/useDocumentHandler'

export default function WalletPage() {
  useDocumentTitle('Wallet')
  return (
    <>
      <DashboardUI.Main.Header>
        <DashboardUI.Title title="Wallet Page" />
      </DashboardUI.Main.Header>
      <DashboardUI.Main.Body>Nothing</DashboardUI.Main.Body>
    </>
  )
}
