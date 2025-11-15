const Project = require('../modules/project');
const wrapAsync = require('../utils/wrapAsync');

exports.createProject = wrapAsync(async (req, res) => {
    try {
        const data = req.body;
        const projectData = await Project.create(data);
        res.status(201).json({
            message: "Project created successfully",
            projectData
        });
    } catch (error) {
        res.status(500).json({message: "Error while creating project", error: error.message});
    }
})

exports.getAllProjects = wrapAsync(async (req, res) => {
    try {
        const {clientId} = req.params;
        const filter = clientId ? {clientId} : {};
        const projects = await Project.find(filter).populate('assignedTeam', 'username email');
        res.status(200).json({
            message: "Projects fetched successfully",
            projects
        });
    } catch (error) {
        res.status(500).json({message: "Error while fetching projects", error: error.message});
    }
})

exports.getProjectById = wrapAsync(async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate('assignedTeam', 'username email');
        if(!project){
            return res.status(404).json({message: "Project not found"});
        }
        res.status(200).json({
            message: "Project fetched successfully",
            project
        });
    } catch (error) {
        res.status(500).json({message: "Error while fetching project", error: error.message});
    }
})

exports.updateProject = wrapAsync(async (req, res) => {
    try {
        const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!project){
            return res.status(404).json({message: "Project not found"});
        }
    } catch (error) {
        res.status(500).json({message: "Error while updating project", error: error.message});
    }
})

exports.deleteProject = wrapAsync(async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if(!project){
            return res.status(404).json({message: "Project not found"});
        }
        res.status(200).json({message: "Project deleted successfully"});
    } catch (error) {
        res.status(500).json({message: "Error while deleting project", error: error.message});
    }
})