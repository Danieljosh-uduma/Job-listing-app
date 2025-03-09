import './Job.css'
import { useState } from 'react'
// import { Jobs } from './Job_details'

interface IJob {
    company_name: string
    job_title: string
    location: {
        city?: string
        country?: string
    }
    job_type: "remote" | "on site"
    chips: ("easy" | "multiple")[]
    description: string
    requirement: string[]
    published: number
}

const Jobs: IJob[] = [
    { company_name: "META Company", job_title: "Product Designer", location: { city: "Porto", country: "Portugal" }, job_type: "remote", chips: ["easy"], description: "Design products", requirement: ["Design skills", "Creativity", "Attention to detail"], published: 2 },
    { company_name: "Google", job_title: "Software Engineer", location: { city: "Mountain View", country: "USA" }, job_type: "on site", chips: ["multiple"], description: "Develop software", requirement: ["Coding skills", "Problem-solving", "Teamwork"], published: 5 },
    { company_name: "Amazon", job_title: "Data Scientist", location: { city: "Seattle", country: "USA" }, job_type: "on site", chips: ["easy"], description: "Analyze data", requirement: ["Data analysis skills", "Statistical knowledge", "Programming"], published: 3 },
    { company_name: "Apple", job_title: "UX Designer", location: { city: "Cupertino", country: "USA" }, job_type: "remote", chips: ["multiple"], description: "Design user experiences", requirement: ["UX design skills", "User research", "Prototyping"], published: 7 },
    { company_name: "Microsoft", job_title: "DevOps Engineer", location: { city: "Redmond", country: "USA" }, job_type: "on site", chips: ["easy"], description: "Manage operations", requirement: ["DevOps skills", "Automation", "Cloud services"], published: 1 },
    { company_name: "Netflix", job_title: "Backend Developer", location: { city: "Los Gatos", country: "USA" }, job_type: "remote", chips: ["multiple"], description: "Develop backend systems", requirement: ["Backend development skills", "Database management", "API design"], published: 4 },
    { company_name: "Tesla", job_title: "Electrical Engineer", location: { city: "Palo Alto", country: "USA" }, job_type: "on site", chips: ["easy"], description: "Design electrical systems", requirement: ["Electrical engineering skills", "Circuit design", "Problem-solving"], published: 6 },
    { company_name: "Facebook", job_title: "Frontend Developer", location: { city: "Menlo Park", country: "USA" }, job_type: "remote", chips: ["multiple"], description: "Develop frontend systems", requirement: ["Frontend development skills", "JavaScript", "CSS"], published: 2 },
    { company_name: "Twitter", job_title: "Product Manager", location: { city: "San Francisco", country: "USA" }, job_type: "on site", chips: ["easy"], description: "Manage products", requirement: ["Product management skills", "Leadership", "Communication"], published: 8 },
    { company_name: "LinkedIn", job_title: "Data Analyst", location: { city: "Sunnyvale", country: "USA" }, job_type: "remote", chips: ["multiple"], description: "Analyze data", requirement: ["Data analysis skills", "Excel", "SQL"], published: 9 },
    { company_name: "Adobe", job_title: "Graphic Designer", location: { city: "San Jose", country: "USA" }, job_type: "on site", chips: ["easy"], description: "Design graphics", requirement: ["Graphic design skills", "Creativity", "Adobe Suite"], published: 10 },
    { company_name: "Spotify", job_title: "Sound Engineer", location: { city: "Stockholm", country: "Sweden" }, job_type: "remote", chips: ["multiple"], description: "Engineer sound", requirement: ["Sound engineering skills", "Audio editing", "Music theory"], published: 3 },
    { company_name: "Salesforce", job_title: "Cloud Architect", location: { city: "San Francisco", country: "USA" }, job_type: "on site", chips: ["easy"], description: "Architect cloud solutions", requirement: ["Cloud architecture skills", "AWS", "Security"], published: 5 },
    { company_name: "Slack", job_title: "Customer Support", location: { city: "Denver", country: "USA" }, job_type: "remote", chips: ["multiple"], description: "Support customers", requirement: ["Customer support skills", "Communication", "Problem-solving"], published: 7 },
    { company_name: "Uber", job_title: "Operations Manager", location: { city: "New York", country: "USA" }, job_type: "on site", chips: ["easy"], description: "Manage operations", requirement: ["Operations management skills", "Leadership", "Logistics"], published: 4 },
    { company_name: "Airbnb", job_title: "Marketing Specialist", location: { city: "San Francisco", country: "USA" }, job_type: "remote", chips: ["multiple"], description: "Specialize in marketing", requirement: ["Marketing skills", "SEO", "Content creation"], published: 6 }
]

export function JobList() {
    const jobs = Jobs
    return (
        <>
            {jobs.map(job => {
                return <Job company_name={job.company_name} job_title={job.job_title} location={job.location} job_type={job.job_type} chips={job.chips} description={job.description} requirement={job.requirement} published={job.published}/>
            })}
        </>
    )
}

function Job(props: IJob) {
    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    return (
        <>
            <div className={show? 'job active-job': 'job'}>
                <div className="company">
                    <div className="company-name">
                        <img src="/src/assets/images/meta.png" alt="Meta company" />
                        <span>{props.company_name}</span>
                    </div>
                    <div className={show ? 'show show-img': 'show'} onClick={handleShow}>
                        <span>show more</span>
                        <img className='show' src="/src/assets/images/arrow-up.txt" alt="favourite" />
                    </div>
                </div>
                <div className="position">
                    <h3>{props.job_title}</h3>
                    <p>{props.location.city}, {props.location.country} ({props.job_type})</p>
                </div>
                <div className="category">
                    <div>
                        {props.chips.map(chip => {
                            return <span className={chip === 'easy' ? 'easy' : 'multiple'}>{chip === 'easy'? 'Easy apply' : 'Multiple Candidates'}</span>
                        })}
                    </div>
                    <span>{props.published}d</span>
                </div>
                {show && 
                    <div className="more-detail">
                        <div className="description">
                            <h4>Job description</h4>
                            <p>{props.description}</p>
                        </div>
                        <div className="requirement">
                            <h4>Requirement</h4>
                            <ul className='requirement-list'>
                                {props.requirement.map(item => {
                                    return <li>{item}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

