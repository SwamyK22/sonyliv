import React, { useState } from 'react'
import tabeleData from './tableData'

function SubscribeTable() {
    const [activeCol, setActiveCol] = useState(999);
  return (
    <div className='tableContainer'>
        <h2 className='title'>Subscribe to watch all content on Sony LIV</h2>
        <table>
        <colgroup>
            <col />
            <col style={{backgroundColor: activeCol === 599 ? "#e89609" : null}}/>
            <col style={{backgroundColor: activeCol === 999 ? "#e89609" : null}}/>
            <col style={{backgroundColor: activeCol === 699 ? "#e89609" : null}}/>
            <col style={{backgroundColor: activeCol === 299 ? "#e89609" : null}}/>
        </colgroup>
        <tbody>
            <tr>
                <td className='firstTab'>
                    <span>Access All Content</span>
                    <p>Movies, Origenals And Live Sports</p>
                </td>
                <td onClick={() => setActiveCol(599)}>
                    <input type='radio' name='col' checked={activeCol === 599} onChange={() => setActiveCol(599)}/>
                   <p> Mobile Only</p>
                    <span>&#8377; 599</span> Yearly
                </td>
                <td  onClick={() => setActiveCol(999)}>
                    <input type='radio' name='col' checked={activeCol === 999} onChange={() => setActiveCol(999)}/>
                    <p>LIV Premium</p>
                    <span>&#8377; 999 </span>Yearly
                </td>
                <td onClick={() => setActiveCol(699)}>
                    <input type='radio'  name='col' checked={activeCol === 699} onChange={() => setActiveCol(699)}/>
                    <p>LIV Premium</p>
                    <span>&#8377; 699</span> 6 Months
                </td>
                <td onClick={() => setActiveCol(299)}>
                    <input type='radio' name='col' checked={activeCol === 299} onChange={() => setActiveCol(299)}/>
                    <p>LIV Premium</p>
                    <span>&#8377; 299</span> Monthly
                </td>
            </tr>
            {tabeleData.map((x) => (
                <tr key={x.title}>
                    <td className='firstTab'>
                        <p className='tabTitle'>{x.title}
                        <img src="https://images.slivcdn.com/UI_icons/info_new.png?t=c_fill&q=low&fr=webp" alt="img" />
                        </p>
                    </td>
                    <td style={{backgroundColor:activeCol === 599 ? 'rgba(0, 0, 0, 0.7)' : null}}>{x.mobile}</td>
                    <td style={{backgroundColor:activeCol === 999 ? 'rgba(0, 0, 0, 0.7)' : null}}>{x.LivYearly}</td>
                    <td style={{backgroundColor:activeCol === 699 ? 'rgba(0, 0, 0, 0.7)' : null}}>{x.Liv6Months}</td>
                    <td style={{backgroundColor:activeCol === 299 ? 'rgba(0, 0, 0, 0.7)' : null}}>{x.LivMontly}</td>
                </tr>
            ))}
            </tbody>
        </table>
        <button className='payBtn'>Pay &#8377;{activeCol}</button>
    </div>
  )
}

export default SubscribeTable