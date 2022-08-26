const CallHai = ({ children }: any) => {
  return <div>{typeof children == 'function' ? children : children('hai')}</div>
}

export default CallHai
