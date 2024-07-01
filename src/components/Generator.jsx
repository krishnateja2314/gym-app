import React, { useState } from 'react'
import SectionWarpper from './SectionWarpper';
import { SCHEMES, WORKOUTS } from '../utils/swoldier'
import Button from './Button';

function Header(props) {
    const { index, title, description } = props;
    return (
        <div className='flex flex-col gap-4 justify-center  items-center'>
            <div className='justify-center flex items-center gap-3'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

function Generator(props) {
    const { updateWorkout, poison, setPoison, muscles, setMuscles, gole, setGole } = props
    const [showModel, setShowModel] = useState(false);


    function toggleModel() {
        setShowModel(!showModel)
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup))
            return
        }

        if (muscles.length > 2) {
            return
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup])
            setShowModel(false)
            return
        }

        setMuscles([...muscles, muscleGroup])
        if (muscles.length === 2) {
            setShowModel(false)
        }

    }

    return (
        <>
            <SectionWarpper id={'generate'} headder={"generate your workout"} title={['It\'s', 'Huge', 'o\'clock']}>
                <Header index={'01'} title={'Pick your poison'} description={'Select the workout you wish to endure.'} />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>

                    {Object.keys(WORKOUTS).map((type, typeIndex) => {
                        return (
                            <button onClick={() => { setPoison(type); setMuscles([]) }} className={'bg-slate-950 border  py-3 rounded-lg ' + (poison === type ? 'border-blue-800' : 'border-blue-400')} key={typeIndex}><p className='capitalize'>{type.replaceAll('_', " ")}</p></button>
                        )
                    })}
                </div>

                <Header index={'02'} title={'Lock on targets'} description={'Select the muscles judged for annihilation.'} />
                <div className='bg-slate-950  border-[1.5px] border-solid border-blue-400 rounded-lg flex flex-col'>
                    <button onClick={toggleModel} className='relative flex items-cemter justify-center p-3'>
                        <p className='capitalize'>{muscles.length === 0 ? 'select muscle groups' : muscles.join(' ')}</p>
                        <i className="absolute right-3 top-1/2 -translate-y-1/2 fa-solid fa-caret-down"></i>
                    </button>
                    {showModel && (
                        <div className='flex flex-col p-3'>
                            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((muscleGroup, muscleGroupIndex) => {
                                return (
                                    <button onClick={() => {
                                        updateMuscles(muscleGroup)
                                    }} className={'hover:text-blue-400 duration-200 ' + (muscles.includes(muscleGroup) ? 'text-blue-400' : '')} key={muscleGroupIndex}>
                                        <p className='uppercase'>{muscleGroup.replaceAll('_', ' ')}</p>
                                    </button>
                                )
                            })}
                        </div>
                    )}
                </div>

                <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimate objective.'} />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                        return (
                            <button onClick={() => { setGole(scheme) }} className={'bg-slate-950 border  py-3 rounded-lg ' + (gole === scheme ? 'border-blue-800' : 'border-blue-400')} key={schemeIndex}><p className='capitalize'>{scheme.replaceAll('_', " ")}</p></button>
                        )
                    })}
                </div>
            </SectionWarpper>
            <Button clickfunc={updateWorkout} >Formulate</Button>
        </>
    )
}

export default Generator;
