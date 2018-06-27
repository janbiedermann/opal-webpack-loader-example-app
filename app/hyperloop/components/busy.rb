class Busy < Hyperloop::Router::Component
  render do
    DIV do
      DIV { 'Super busy!' }
      BR()
      Link('/lazy') { 'Click to be lazy' }
    end
  end
end