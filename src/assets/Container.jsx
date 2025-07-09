
const Container = ({className,children}) => {
  return (
    <div className={`max-w-[1330px] m-auto ${className}`}>{children}</div>
  )
}

export default Container
