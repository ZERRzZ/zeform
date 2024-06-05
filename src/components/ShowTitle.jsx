import React from 'react';

export default function ShowTitle() {

  return (
    <>
      <h1>ShowTitle</h1>
      <span>北京时间：{new Date().toDateString()}</span>
    </>
  )

}