import React, { useState } from 'react'
import ReactPageScroller from 'react-page-scroller';

export default function App(): JSX.Element {

  const [currentPage, setCurrentPage] = useState<number>()

  return (
    <div style={{ paddingTop: 20 }}>
      <div style={{ position: 'fixed', top: 0 }}>1</div>
      <ReactPageScroller
        pageOnChange={setCurrentPage}
        customPageNumber={currentPage}
        containerHeight="calc(100vh - 20px)"
      >
        <div>1asdasd</div>
        <div>2asdasd</div>
        <div>3asdasd</div>
      </ReactPageScroller>
    </div>
  )
}
