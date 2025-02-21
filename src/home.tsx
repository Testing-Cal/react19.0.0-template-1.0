import React, {useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const style = {fontWeight:'800', size: '48px'}
const data = [{
  name:'Engagement Index',
  color:'yellow',
  data: [2.5,2.75,3,3.25,3.5,3.75]
}, {
  name:'sales',
  color:'skyblue',
  data: [5,7,9,13,18,25]
},{
name:'Oerational Efficiency',
color:'orange',
data: [0.6,0.65,0.7,0.75,0.8,0.85]
},{
name:'Innovation index',
color:'gray',
data: [3,3,3.5,3.5,3.75,4]
}]

function Home() {
  const [title,setTitle] = useState('Engagement dashboard')
  return (
    <div className="App">
      <textarea style={style} className="col-md-6 text-center border-0 form-control blockquote" value={title} onChange={/*istanbul ignore next*/e=>setTitle(e.target.value)}/><br/>
      <div className="row mb-5">
        <div className="col-md-6 pr-4">
            <HighchartsReact highcharts={Highcharts} options={{
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    credits:{
      enabled:false
    },
    title: {
        text: 'Operation efficiency vs cultural Parameters'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Browser share',
        colors: [
         'yellow',
         'skyblue',
         'orange',
         'gray'
        ],
        data: [
          ['Manager effectivees index',100],
          ['Engagement index', 1000],
          ['Teamwork Index', 800],
          ['Psychlogial safety index', 800]
        ]
    }]
}}/>
        </div>
        <div className="col-md-6">
          <HighchartsReact highcharts={Highcharts} options={ {
    xAxis: {
        categories: ['1', '2', '3', '4', '5', '6']
    },
    title: {
      text: 'Business outcome vs cultural index'
    },
    plotOptions: {
        series: {
            marker: {
                radius: 8,
                symbol:'circle'
            }
        }
    },
    credits:{
      enabled:false
    },
    series: data
    }} />
        </div>
      </div>
      <div className="col-md-12">
          <div className="col-md-9">
            <table className="table table-striped table-bordered table-dark p-5">
              <tbody>
              {
                  data.map(x=><tr key={x.name}>
                      <td><b>{x.name}</b></td>
                      {
                        x.data.map(y=><td key={y}>{y}</td>)
                      }
                    </tr>)
                }
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
}

export default Home;
