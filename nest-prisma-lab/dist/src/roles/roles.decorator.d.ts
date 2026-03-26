export declare const ROLES_KEY = "roles";
export declare const Roles: (...args: string[]) => import("@nestjs/common").CustomDecorator<string>;
export declare enum Role {
    Admin = "ADMIN",
    User = "USER"
}
