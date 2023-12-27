import React from 'react'

export default function Alerts(props) {
  return (
    props.alert && <div class="alert alert-success" role="alert">
    {props.alert.type} : {props.alert.message}
    </div>
  )
}
