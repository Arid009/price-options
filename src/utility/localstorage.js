const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-applications')
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication)
    }
}


const saveJobApplication = id => {

}

export { saveJobApplication }