class BaseController {
    constructor(manager) {
        this.manager = manager;
    }

    create = async (req, res) => {
        try {
            const newRecord = await this.manager.create(req.body);
            res.status(201).json(newRecord);
        } catch (error) {
            console.error('Error creating record:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    };

    getById = async (req, res) => {
        try {
            const {id} = req.params;
            const record = await this.manager.getById(id);
            if (!record) {
                return res.status(404).json({message: 'Record not found'});
            }
            res.json(record);
        } catch (error) {
            console.error('Error fetching record:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    };

    update = async (req, res) => {
        try {
            const {id} = req.params;
            const [updated] = await this.manager.update(id, req.body);
            if (!updated) {
                return res.status(404).json({message: 'Record not found'});
            }
            res.json({message: 'Record updated successfully'});
        } catch (error) {
            console.error('Error updating record:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    };

    delete = async (req, res) => {
        try {
            const {id} = req.params;
            const deleted = await this.manager.delete(id);
            if (!deleted) {
                return res.status(404).json({message: 'Record not found'});
            }
            res.json({message: 'Record deleted successfully'});
        } catch (error) {
            console.error('Error deleting record:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    };

    getAll = async (req, res) => {
        try {
            const results = await this.manager.getAll();
            res.json(results);
        } catch (error) {
            console.error('Error fetching records:', error);
            res.status(500).json({message: 'Internal server error'});
        }
    };
}

module.exports = BaseController;