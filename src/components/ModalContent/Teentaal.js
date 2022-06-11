import React from 'react'
import List from '../List'

const Teentaal = () => {
  return (
    <div>
      <List heading="Vilambit Laya(slow speed)"
        list={["Chakradhar Tihai", "Layakari", "Paran Jodi Aamad"]}
      />
      <List heading="Madhya Laya(medium speed)"
        list={["Tukra - Tigdha digdig...(5 spins)", "Tora - Tat Tat Thei... (both sides)", "Tora - Ta Thei Tata Thei...(15 spin)", "Chakradar Tora - Tat Tat Thei...(9+9+9 spins)"]}
      />
      <List heading="Drut Laya(fast speed)"
        list={["Paran - Dhata Ka Thun Ga", "Gaat - Natavari Gaat", "16 Tatkar"]}
      />
    </div>
  )
}

export default Teentaal