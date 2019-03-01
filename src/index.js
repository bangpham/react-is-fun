import React, { Component } from 'react'
import { render } from 'react-dom'

let skiData = {
    total: 50,
    goal: 100
}

const getPercent = (decimal) => {
    return decimal * 100 + '%'
}

const calculateGoal = (total, goal) => {
    return getPercent(total/goal)
}

const SkiDayCounter = ({total, goal}) => {
    return (
        <section>
            Ski days
            <div>total: {total}</div>
            <div>goal: {calculateGoal(total, goal)}</div>
        </section>
    )
}

render(
    <SkiDayCounter
        total={skiData.total}
        goal={skiData.goal}
        />,
    document.getElementById('root')
)


/**

ALTERNATIVE METHOD TO CREATE ELEMENTS:

React.createElement(
  type,
  [props],
  [...children]
)
*/
// const title = React.createElement(
//     'ul',
//     {id : 'title', className : 'header', style : headerStyle},
//     React.createElement(
//         'li',
//         {},
//         'item on list'
//     )
// )
