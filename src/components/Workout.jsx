import React from 'react'
import SectionWarpper from './SectionWarpper';
import ExeriseCard from './ExeriseCard';
function Workout(props) {
    const { workout } = props

    return (
        <SectionWarpper id={'workout'} headder={"Welcome to"} title={['The', 'Denger', 'Zone']}>
            <div className='flex flex-col gap-4'>
                {workout.map((exerise, i) => {
                    return (
                        <ExeriseCard key={i} i={i} exerise={exerise} />
                    )
                })}
            </div>

        </SectionWarpper>
    )
}

export default Workout;
