import React from 'react'
const Default =require('../layout/Default')


function Edit  ({vegtable}) {
  return (
    <Default title= 'Edit Page'>
 <form method="POST" action={`/veggies/${vegtable._id}?_method=PUT`}>
        Name: <input type='text' name='name' defaultValue={vegtable.name} />
        <br />
        Color: <input type='text' name='color' defaultValue={vegtable.color} />
        <br />
        Ready to Eat:
        {vegtable.readyToEat ? (
          <input type='checkbox' name='readyToEat' defaultChecked />
        ) : (
          <input
            type='checkbox'
            name='readyToEat'
            defaultValue={vegtable.readyToEat}
          />
        )}
        <br />
        Is It Good:
        {vegtable.isItGood ? (
          <input type='checkbox' name='isItGood' defaultChecked />
        ) : (
          <input
            type='checkbox'
            name='isItGood'
            defaultValue={vegtable.isItGood}
          />
        )}
        <br />
        <input type='submit' value='Submit Changes' />
      </form>
    </Default>
  )
}

module.exports = Edit