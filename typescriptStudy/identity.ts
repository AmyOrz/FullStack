//泛型，保证传入的参数类型和返回的类型相同
function identity<T>(name:T):T{
    return name;
}
