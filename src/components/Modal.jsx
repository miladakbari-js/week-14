function Modal({onConfirm , onCancel , message}) {
  return (
    <div>
      <div>
        <p>{message}</p>
        <button onClick={onConfirm}>تایید</button>
        <button onClick={onCancel}>انصراف</button>
      </div>
    </div>
  );
}

export default Modal;
