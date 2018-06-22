# For lazy laoding, create a wrapper component
%x{
  const HyperLazy = ReactLoadable({
    loader() {
      return import('./lazy.rb').then(function(module) { // The import must be a string literal
        module.default(); // its a export wrapped opal module
        Opal.load('components/lazy'); // run the code
        return module;
      });
    },
    loading() {
      return "Loading..."; // could be a component too, see react-loadable documentation
    },
    render(loaded, props) {
      // pass router params to wrapped component
      return #{React::API.create_element(Lazy, match: `props.match`, location: `props.location`, history: `props.history`).to_n};
    }
  });
  global.HyperLazy = HyperLazy; // register globally so the native wrapper can find it
}

class App < Hyperloop::Router

  route do
    DIV(class_name: 'hello') do
      Route('/app', mounts: Busy)
      Route('/lazy', mounts: HyperLazy) # mount the wrapped lazy loading component
      # Routes for cordova app starting
      if `typeof Cordova !== 'undefined' && Cordova == true`
        Route('',  exact: true, mounts: Busy)
        Route('/index.html',  exact: true, mounts: Busy)
      end
      # define routes using the Route psuedo component.  Examples:
      # Route('/foo', mounts: Foo)                : match the path beginning with /foo and mount component Foo here
      # Route('/foo') { Foo(...) }                : display the contents of the block
      # Route('/', exact: true, mounts: Home)     : match the exact path / and mount the Home component
      # Route('/user/:id/name', mounts: UserName) : path segments beginning with a colon will be captured in the match param
      # see the hyper-router gem documentation for more details
    end
  end
end

