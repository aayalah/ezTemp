<?php
    $value = $_POST;
        
        copy('json/index-copy.json','json/main/index.json');
        copy('json/architects.json','json/main/architects.json');
        copy('json/featuresBenefits.json', 'json/main/featuresBenefits.json');
        copy('json/homeowners.json', 'json/main/homeowners.json');
        copy('json/homes.json', 'json/main/homes.json');
        copy('json/builders.json', 'json/main/builders.json');
        
    
?>

