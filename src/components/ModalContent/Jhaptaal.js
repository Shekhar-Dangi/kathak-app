import React from 'react'
import List from '../List'

const Jhaptaal = () => {

  return (
    <div>
      <List heading="Vilambit Laya(slow speed)"
        list={["Layakari", "Aamad", "Tukra - Tigdha diga diga..."]}
      />
      <List heading="Madhya Laya(medium speed)"
        list={["Tora - Tigdha digdig...(13 spins)", "Tora - Ta Thei TaThei TataThei...", "Chakradar Tora - Ta Thunga Takka..."]}
      />
      <List heading="Drut Laya(fast speed)"
        list={["Paran - Tat Tat Ta Thuka...", "Natavari Bole - Tat Tat Tat Tat", "Gaat", "Baat"]}
      />
    </div>
  )
}

export default Jhaptaal