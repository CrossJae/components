// 节流
function throttle(func, interval){
  let identify = 0
  return (...args) => {
    if(identify) return
    identify = setTimeout(() => identify = 0, interval)
    func.apply(this, args)
  }
}
