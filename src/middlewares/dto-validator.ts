import { RequestHandler } from 'express';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import { sanitize } from 'class-sanitizer';
import HttpException from '../exception/http-exception';

function dtoValidationMiddleware(
  type: any,
  skipMissingProperties = false,
): RequestHandler {
  return (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
      throw new HttpException(400, 'Request body is empty');
    }

    const dtoObj = plainToClass(type, req.body);
    validate(dtoObj, { skipMissingProperties }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const dtoErrors = errors
            .map((error: ValidationError) =>
              Object.values(error.constraints || {}).join(', '),
            )
            .join(', ');
          next(new HttpException(400, dtoErrors));
        } else {
          // Sanitize the object and call the next middleware
          sanitize(dtoObj);
          req.body = dtoObj;
          next();
        }
      },
    );
  };
}

export default dtoValidationMiddleware;
