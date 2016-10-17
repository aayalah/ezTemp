<?php
    
$nPage = $_POST['par1']['webpage'];

    
    switch ('index-copy.json') {
        case 'index-copy.html':
            $file = fopen("json/edits.json", "w");
            $fileName = 'json/edits.json';
            break;
        case 'architiects.html':
             $file = fopen("json/architects.json", "w");
            $fileName = 'json/architects.json';

            break;
        case 'builders.html':
             $file = fopen("json/builders.json", "w");
            $fileName = 'json/builders.json';
            
            break;
        case 'featuresBenefits.html':
            $file = fopen("json/builders.json", "w");
            $fileName = 'json/featuresBenefits.json';

            break;
        case 'homeowners.html':
            $file = fopen("json/homeowners.json", "w");
            $fileName = 'json/homeowners.json';
            break;
        case 'homes.html':
            $file = fopen("json/homes.json", "w");
            $fileName = 'json/homes.json';
            break;
        default:
            break;
    } 
        $data = json_decode($file, true);

    
        $data[] = array(
                'file' => $nPage,
                'loadIt' => 'update-json',
                'content' => $_POST
            );

    file_put_contents($fileName, json_encode($data));

    

?>