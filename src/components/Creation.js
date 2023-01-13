import React from 'react'

export const Creation = ({idx,title}) => {
  return (
    <div className={`creation creation__image${idx}`}>
        <h3 className="creation__title">
            {title}
        </h3>
    </div>
  )
}
