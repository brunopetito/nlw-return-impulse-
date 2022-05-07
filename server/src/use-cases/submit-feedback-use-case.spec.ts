import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"
const submitFeedback = new SubmitFeedbackUseCase(
  {create:async()=>{ }},
  {sendMail: async()=>{}}
)

describe('Submit feedback',()=>{
  it('should be able to submit a feedback',async()=>{
    await expect(submitFeedback.execute({
      type:'BUG',
      comment: 'example comment',
      screenshot:'test.jpg',
    })).resolves.not.toThrow();
  })
})

it('should not be able without type',async()=>{
  await expect(submitFeedback.execute({
    type:'',
    comment: 'example comment',
    screenshot:'test.jpg',
  })).rejects.toThrow();
})

it('should not be able without comment',async()=>{
  await expect(submitFeedback.execute({
    type:'BUG',
    comment: '',
    screenshot:'test.jpg',
  })).rejects.toThrow();
})

it('should not be able without an invalid screenshot',async()=>{
  await expect(submitFeedback.execute({
    type:'BUG',
    comment: 'ta tydi bdasda',
    screenshot:'test.jpg',
  })).rejects.toThrow();
})