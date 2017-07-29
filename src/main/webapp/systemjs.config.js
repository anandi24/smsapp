(function(global) {
	System.config({
		paths : {
			'npm:' : 'node_modules/'
		},
		map : {
			 smsApp : 'app',
			'@angular/core' : 'npm:@angular/core/bundles/core.umd.js',
			'@angular/common' : 'npm:@angular/common/bundles/common.umd.js',
			'@angular/compiler' : 'npm:@angular/compiler/bundles/compiler.umd.js',
			'@angular/platform-browser' : 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
			'@angular/platform-browser-dynamic' : 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
			'@angular/http' : 'npm:@angular/http/bundles/http.umd.js',
			'@angular/router' : 'npm:@angular/router/bundles/router.umd.js',
			'@angular/forms' : 'npm:@angular/forms/bundles/forms.umd.js',
			'rxjs' : 'npm:rxjs',
			'ng2-pagination' : 'npm:ng2-pagination',
		    'ng2-bootstrap': 'npm:ng2-bootstrap/bundles/ngx-bootstrap.umd.js',
		    'core-js': 'node_modules/core-js'
		},
		packages : {
			smsApp : {
				main : './main.js',
				defaultExtension : 'js'
			},
			'rxjs' : {
				defaultExtension : 'js'
			},
			'ng2-pagination' : {
				main: './index.js',
				defaultExtension : 'js'
			},
            'core-js': {
                main: './index.js',
                defaultExtension: 'js'
            }

		}
	});
})(this);