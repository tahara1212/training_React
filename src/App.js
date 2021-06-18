import React, { useState } from "react";
import "./css/style.css"

export const App = () => {
  return (
    <>
      <div class="p-add">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div class="p-box">
        <p>未完了</p>
        <ul>
          <div class="p-box__todo">
            <li>完了していないタスク</li>
            <div>
              <button>完了</button>
              <button>削除</button>
            </div>
          </div>
          <div class="p-box__todo">
            <li>完了していないタスク</li>
            <div>
              <button>完了</button>
              <button>削除</button>
            </div>
          </div>
        </ul>
      </div>
      <div class="p-box p-Complete">
        <p>達成</p>
        <ul>
          <div class="p-box__todo">
            <li>完了したタスク</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
      <div></div>
    </>
  )
}