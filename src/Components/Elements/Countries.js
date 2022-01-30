import React, { useEffect } from 'react';

import '../../Assets/vendors/mdi/css/materialdesignicons.min.css';
import '../../Assets/vendors/css/vendor.bundle.base.css';
import '../../Assets/vendors/flag-icon-css/css/flag-icon.min.css';
import '../../Assets/vendors/jvectormap/jquery-jvectormap.css';
import '../../Assets/css/demo/style.css';
import '../../Assets/images/favicon.png';

// import script1Src from '../../Assets/vendors/js/vendor.bundle.base.js';
// import script2Src from '../../Assets/vendors/chartjs/Chart.min.js';
// import src4 from '../../Assets/vendors/jvectormap/jquery-jvectormap-world-mill-en.js';

import worldmap from '../../Assets/worldmap.png';

function Countries(props) {

    useEffect(() => {
        // const script1 = document.createElement('script');
        // script1.src= script1Src;
        // script1.async = true;

        // const script2 = document.createElement('script');
        // script2.src= src4;
        // script2.async = true;

    }, []);

    return (
        <div className='scriptcontainer'>
            <h4 className='sc_h3'>Countries our top investors come from</h4>
            <p className='sc_p'>with their cumulative investment amount</p>
            <div class="mdc-layout-grid__inner mt-2">
                    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet">
                        <div class="table-responsive">
                          <table class="table dashboard-table">
                            <tbody>
                              <tr>
                                <td>
                                  <span class="flag-icon-container"><i class="flag-icon flag-icon-us mr-2"></i></span>United States</td>
                                <td>$30,465,671.10</td>
                                <td class=" font-weight-medium"> 80% </td>
                              </tr>
                              <tr>
                                <td> <span class="flag-icon-container"><i class="flag-icon flag-icon-ph mr-2"></i></span>Philippines	</td>
                                <td>$9,678,064.75</td>
                                <td class=" font-weight-medium"> 30% </td>
                              </tr>
                              <tr>
                                <td> <span class="flag-icon-container"><i class="flag-icon flag-icon-gb mr-2"></i></span>United Kingdom</td>
                                <td>$35,576,055.98</td>
                                <td class=" font-weight-medium"> 85% </td>
                              </tr>
                              <tr>
                                <td> <span class="flag-icon-container"><i class="flag-icon flag-icon-ca mr-2"></i></span>Canada</td>
                                <td>$27,786,045.49</td>
                                <td class=" font-weight-medium"> 75% </td>
                              </tr>
                              <tr>
                                <td> <span class="flag-icon-container"><i class="flag-icon flag-icon-fr mr-2"></i></span>France</td>
                                <td>$12,675,050.93</td>
                                <td class=" font-weight-medium"> 31% </td>
                              </tr>

                              <tr>
                                <td> <span class="flag-icon-container"><i class="flag-icon flag-icon-in mr-2"></i></span>India</td>
                                <td>$5,675,050.93</td>
                                <td class=" font-weight-medium"> 15% </td>
                              </tr>

                              <tr>
                                <td> <span class="flag-icon-container"><i class="flag-icon flag-icon-de mr-2"></i></span>Germany</td>
                                <td>$23,675,050.93</td>
                                <td class=" font-weight-medium"> 70% </td>
                              </tr>

                            </tbody>
                          </table>
                        </div>
                    </div>
                    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet"> 
                      <img src={worldmap} alt='' style={{width: '100%'}} />
                    </div>
                    </div>
        </div>
    );
}

export default Countries;