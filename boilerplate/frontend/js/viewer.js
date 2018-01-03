/*
Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

    http://aws.amazon.com/apache2.0/

or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/*

  Set Javascript specific to the extension viewer view in this file.

*/

$(document).ready(function() {
    // all custom jQuery will go here
    $("#demo").html("Hello, World!");
    $("#demo").click(onDemoClick);
});

//var count = 0;




function onDemoClick(){
  var data = {};
	data.title = "title";
	data.message = "message";

	$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
        contentType: 'application/json',
                url: 'https://localhost:8080/count',
                success: function(data) {
                    console.log('success');
                    console.log(JSON.stringify(data));
                    $("#demo").html("What Now " + JSON.stringify(data) );
                }
            });


}
