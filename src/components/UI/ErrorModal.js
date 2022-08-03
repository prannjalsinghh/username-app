

import Card from './Card';

import classes from './errorModal.module.css';

const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.Error.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.Error.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;