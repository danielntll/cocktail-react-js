import './PageToolbar.css'

const PageToolbar = ({ leftButton, pageTitle, rightButton, child = undefined }) => {
  // V ----------------------
  // C ----------------------
  // R ----------------------
  return (
    <div className="PageToolbar">
      {
        child ?
          child
          :
          <>
            <div className='PageToolbar__sx'>
              {leftButton}
            </div>
            <div className='PageToolbar__title'>
              {pageTitle}
            </div>
            <div className='PageToolbar__dx'>
              {rightButton}
            </div>
          </>
      }

    </div>
  );
}

export default PageToolbar;