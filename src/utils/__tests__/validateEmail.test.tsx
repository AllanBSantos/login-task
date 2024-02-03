import { validateEmail } from "../validateEmail";


describe('validateEmail', () => {
    it('should return true for valid emails', () => {
        const correctEmails = [
            'test@email.com',
            'name.surname@email.com',
            'name+surname@email.com',
            'name_surname@email.com',
            'name-surname@email.com',
            'name@email.co.uk',
            'name@email.com.br',
            'name123@email.com',
            'name@email.info'
          ];
        
          correctEmails.forEach(email => {
            expect(validateEmail(email)).toBe(true);
          });

    });

    it('should return false for invalid emails', () => {
        const incorrectEmails = [
            'email.com',
            'name@',
            'name.email.com',
            'name@.com',
            'name@com',
            'name@e mail.com',
            'name email.com',
            'name@email..com'
          ];
        
          incorrectEmails.forEach(email => {
            expect(validateEmail(email)).toBe(false);
          });

    });
});
