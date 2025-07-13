const { createBrief, getAllBriefs } = require('../../controllers/briefController');
const Brief = require('../../models/Brief');

jest.mock('../../models/Brief');

describe('Brief Controller Functions', () => {
  it('createBrief - should create and return a brief', async () => {
    const req = {
      body: {
        titre: 'New Brief',
        description: 'New Description',
        competences: ['Node', 'Express']
      }
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    Brief.prototype.save = jest.fn().mockResolvedValue(req.body);
    await createBrief(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(req.body);
  });

  it('getAllBriefs - should return list of briefs', async () => {
    const briefs = [{ titre: 'Test', description: 'Desc', competences: ['A'] }];
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    Brief.find.mockResolvedValue(briefs);

    await getAllBriefs(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(briefs);
  });
});