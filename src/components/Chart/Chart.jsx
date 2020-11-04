import {Bar} from 'react-chartjs-2'


export default function CovidChart({data, country}){
    console.log(data)
    if(data){
        return(
            <Bar 
            data={{
                labels: ['Infected' , 'Recovered', 'Deaths'],
                datasets: [
                    {
                        label: 'People',
                        backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                        data: [data.confirmed.value,data.recovered.value, data.deaths.value],
                    },
                    
                
                ],

            }}
            options={{
                legend: { display: false },
                title: { display: true, text: (country) ? `Current state in ${country}` : `Global` } ,
              }}
              />
        )
      

    }
    else{
        return 'not loading'
    }
 
    

}