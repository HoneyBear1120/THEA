import React from "react";

export default function Modalbutton(props) {
  return (
    <button
      type="button"
      class="btn btn-danger cs_btn_size"
      data-toggle="modal"
      data-target="#modaldelete"
      onClick={props.onClick}
    >
      <i class="fe fe-trash mr-2"></i>Delete
    </button>
  );
}
