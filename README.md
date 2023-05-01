# Pipes

> where's mario when u need him ?? 

- basic syntax:

```html
{{height | number: "1.0-0" }}
res: 1223.23223 -> 1,223
```

- with more than one argument

```html
{{amount | currency: "JOD" : "symbol" : "1.2-4" }}
```

- chained together

```html
{{miles | convert : "km" | number: "1.0-2"}}
```

---

### custom pipes

```bash
ng g pipe <name>
ng g pipe convert
```

will generate a pipe and hook it to `app.module` 

you can do whatever u want in there:

> it's still `js` so be **carful** of ***math***, or use `WASM` to handle it 

```js
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: number, targetUnits:string): number {
    if (value === undefined) return 0;
    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 * 1000;
      default:
        throw new Error('Target unit not supported')
    }
  }

}
```