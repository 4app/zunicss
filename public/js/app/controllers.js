

    app.controller('HomeController', 
        function($rootScope, $location)
        {
            $rootScope.curr = $location.path();
            $rootScope.title = '';
        });

    app.controller('GridController', 
        function($rootScope, $location)
        {
            $rootScope.curr = $location.path();
            $rootScope.title = 'Grid - ';


        });

    app.controller('TypographyController', 
         function($rootScope, $location)
         {
             $rootScope.curr = $location.path();
             $rootScope.title = 'Typography - ';
          });

    app.controller('TablesController', 
         function($rootScope, $location)
         {
             $rootScope.curr = $location.path();
             $rootScope.title = 'Tables - ';
          });

    app.controller('FormController', 
         function($rootScope, $location)
         {
             $rootScope.curr = $location.path();
             $rootScope.title = 'Form -';
          });

    app.controller('ButtonsController', 
         function($rootScope, $location)
         {
             $rootScope.curr = $location.path();
             $rootScope.title = 'Buttons - ';
          });

    app.controller('ImagesController', 
         function($rootScope, $location)
         {
             $rootScope.curr = $location.path();
             $rootScope.title = 'Images  - ';
          });

    app.controller('MenuBarController', 
         function($rootScope, $location)
         {
             $rootScope.curr = $location.path();
             $rootScope.title = 'Menu Bar - ';
          });

    app.controller('MenuSidebarController', 
         function($rootScope, $location)
         {
             $rootScope.curr = $location.path();
             $rootScope.title = 'Menu Sidebar - ';
          });

