###

RXJS

1. Reactive Programming is a new way of building app.
   - Our app will react to changes and handle data stream rather than we writing each event handler seperately.
2. RXJS is a library, which makes ys in making asyc call and implement callback using obseravable.

3. RxJS consist of 3 main thing

- Observable
- Satelite Data Type -observers, Schedulers, Subject
- Operators
  -Array Methods
  - map
  - filter
  - reduce
- Helps us in updating Data stream.

# Observable

- Its data stream.
  - In a ecormerce shopping cart application.
    - user comes and places an order
      - Order status will change over time // continuously changing
        -order places
        -order Processing
        -order submitted
        - order completed
    - Need to informed to multiple apps.

-Subscriber
-It will listen to the Observable data change/update.

- My app us Dashboard
  -order Status -latest value always -since we have subscribe to it.

## example 2

- Youtube channel - ARC Tutorial
  Observable

  - Data(Video) is posted avery day.
  - Any Changes that happen to my channel
  - Content
    - Video
    - Community Message

  SubsCribed

  - you get notified everytime I post video.
  - There is any changes

  RxJS Operator

  - Filter
  - map

# Observable

- Observable emitsdata over a period of time.
- Observable needs to be subscribed else it won't do anything on its own.
- An Observable has 3 methods namely --> Next,complete and error.
- Angular uses Obserable extensibily under the hood for Routing, Forms and almost all feature.

# Type of Operators

- There are a lot of operators to do various types of operations.
- We have operators for below functioning
  - Creation
  - Mathematical
  - Join
  - Transformation
  - Filtering
  - Utility
  - Conditional
  - Multi Casting
  - Error Handling

# RxJS - Of operator

- Make observable from string or array or an object
- where to use it?

  - Whenever we want to pass a variable which has to be Observable Instead of Array or String, we use Of Operator.
  - Hands on example
    - viewers: Observable<string[]> of(['welcome','to','arc','tutorials'])

  # From Operator

- From operator will create an observable from an array, an array-like object, a promise, an iterable, or an observable-like object
- Remember it will always take Array or Array like.
- Lot of people will confuse "from" operator and "of"operator.
- Hands-on Example

  - students2: Observable<string> = from(['welcome','to','arc','tutorial'])

  # Of vs From Operator

  - From operator will create an observable from array, an array-like object, a promise, a iterable object, or an observable-like object.

  - Of Operator can create observable from a string, object or Array
    - Specially useful when working with module
      -Handson example
    - student3:Observable<User>= of(this.userObj)
    - student1: Observable<string>= of("welcome")
    - student2: Observable<string> = from(["welcome","to","arc","tutorials"])

  # fromEvent operator

- creates an Onservable that emits events of sepcific type coming from given event target
- We can bind Target Element and methods to make sure we get Observable as output.
- Angular Specific -> We will use ViewChild, NativeElement as target element and bind event.

# Interval Operator

- Creates an Observable that emits sequential number every specified interval of time, on specified SchedulerLike,

- let numbers=Interval(5000)
