import OutlineCard from '../Fragments/OutlineCard'

export default function ExprensiveAndIncomeAside({ styles }) {
  return (
    <OutlineCard>
      <OutlineCard.Header>
        <OutlineCard.Title title="Expenses and income" />
      </OutlineCard.Header>
      <OutlineCard.Body className="pad-t-20">
        <div className="dsp-flex align-itms-center justify-between gap-10 pad-b-20">
          <div className="dsp-flex fl-colm gap-4">
            <p className="font-size-14 font-weg-600">Expense</p>
            <span className="font-size-24 font-weg-600">75%</span>
            <span className="disabled-text-2 font-size-13 space-08">5.653</span>
          </div>
          <div className="dsp-flex fl-colm align-itms-center gap-4 font-size-14 font-weg-600">
            <span style={{ width: '1px', backgroundColor: 'var(--text2)', height: '20px', display: 'block' }}></span>
            VS
            <span style={{ width: '1px', backgroundColor: 'var(--text2)', height: '20px', display: 'block' }}></span>
          </div>
          <div className="dsp-flex fl-colm align-itms-end gap-4">
            <p className="font-size-14 font-weg-600">Income</p>
            <span className="font-size-24 font-weg-600">40%</span>
            <span className="disabled-text-2 font-size-13 space-08">2.656</span>
          </div>
        </div>
        <div className={styles.bar_percentage}>
          <div
            className={styles.bar_percentage__bar}
            style={{ '--bar-percentage': '70%', '--bar-bg-color': '#535CE5' }}
          ></div>
          <div
            className={styles.bar_percentage__bar}
            style={{ '--bar-percentage': '30%', '--bar-bg-color': '#FFA612' }}
          ></div>
        </div>
      </OutlineCard.Body>
    </OutlineCard>
  )
}
