import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type roomsModel = runtime.Types.Result.DefaultSelection<Prisma.$roomsPayload>;
export type AggregateRooms = {
    _count: RoomsCountAggregateOutputType | null;
    _avg: RoomsAvgAggregateOutputType | null;
    _sum: RoomsSumAggregateOutputType | null;
    _min: RoomsMinAggregateOutputType | null;
    _max: RoomsMaxAggregateOutputType | null;
};
export type RoomsAvgAggregateOutputType = {
    id: number | null;
    capacity: number | null;
    price_per_night: runtime.Decimal | null;
};
export type RoomsSumAggregateOutputType = {
    id: number | null;
    capacity: number | null;
    price_per_night: runtime.Decimal | null;
};
export type RoomsMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    capacity: number | null;
    price_per_night: runtime.Decimal | null;
    image_url: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RoomsMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    description: string | null;
    capacity: number | null;
    price_per_night: runtime.Decimal | null;
    image_url: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type RoomsCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    capacity: number;
    price_per_night: number;
    image_url: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type RoomsAvgAggregateInputType = {
    id?: true;
    capacity?: true;
    price_per_night?: true;
};
export type RoomsSumAggregateInputType = {
    id?: true;
    capacity?: true;
    price_per_night?: true;
};
export type RoomsMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    capacity?: true;
    price_per_night?: true;
    image_url?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type RoomsMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    capacity?: true;
    price_per_night?: true;
    image_url?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type RoomsCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    capacity?: true;
    price_per_night?: true;
    image_url?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type RoomsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.roomsWhereInput;
    orderBy?: Prisma.roomsOrderByWithRelationInput | Prisma.roomsOrderByWithRelationInput[];
    cursor?: Prisma.roomsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RoomsCountAggregateInputType;
    _avg?: RoomsAvgAggregateInputType;
    _sum?: RoomsSumAggregateInputType;
    _min?: RoomsMinAggregateInputType;
    _max?: RoomsMaxAggregateInputType;
};
export type GetRoomsAggregateType<T extends RoomsAggregateArgs> = {
    [P in keyof T & keyof AggregateRooms]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRooms[P]> : Prisma.GetScalarType<T[P], AggregateRooms[P]>;
};
export type roomsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.roomsWhereInput;
    orderBy?: Prisma.roomsOrderByWithAggregationInput | Prisma.roomsOrderByWithAggregationInput[];
    by: Prisma.RoomsScalarFieldEnum[] | Prisma.RoomsScalarFieldEnum;
    having?: Prisma.roomsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RoomsCountAggregateInputType | true;
    _avg?: RoomsAvgAggregateInputType;
    _sum?: RoomsSumAggregateInputType;
    _min?: RoomsMinAggregateInputType;
    _max?: RoomsMaxAggregateInputType;
};
export type RoomsGroupByOutputType = {
    id: number;
    name: string;
    description: string | null;
    capacity: number;
    price_per_night: runtime.Decimal;
    image_url: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
    _count: RoomsCountAggregateOutputType | null;
    _avg: RoomsAvgAggregateOutputType | null;
    _sum: RoomsSumAggregateOutputType | null;
    _min: RoomsMinAggregateOutputType | null;
    _max: RoomsMaxAggregateOutputType | null;
};
type GetRoomsGroupByPayload<T extends roomsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RoomsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RoomsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RoomsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RoomsGroupByOutputType[P]>;
}>>;
export type roomsWhereInput = {
    AND?: Prisma.roomsWhereInput | Prisma.roomsWhereInput[];
    OR?: Prisma.roomsWhereInput[];
    NOT?: Prisma.roomsWhereInput | Prisma.roomsWhereInput[];
    id?: Prisma.IntFilter<"rooms"> | number;
    name?: Prisma.StringFilter<"rooms"> | string;
    description?: Prisma.StringNullableFilter<"rooms"> | string | null;
    capacity?: Prisma.IntFilter<"rooms"> | number;
    price_per_night?: Prisma.DecimalFilter<"rooms"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.StringNullableFilter<"rooms"> | string | null;
    is_active?: Prisma.BoolNullableFilter<"rooms"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"rooms"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"rooms"> | Date | string | null;
};
export type roomsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    price_per_night?: Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _relevance?: Prisma.roomsOrderByRelevanceInput;
};
export type roomsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.roomsWhereInput | Prisma.roomsWhereInput[];
    OR?: Prisma.roomsWhereInput[];
    NOT?: Prisma.roomsWhereInput | Prisma.roomsWhereInput[];
    name?: Prisma.StringFilter<"rooms"> | string;
    description?: Prisma.StringNullableFilter<"rooms"> | string | null;
    capacity?: Prisma.IntFilter<"rooms"> | number;
    price_per_night?: Prisma.DecimalFilter<"rooms"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.StringNullableFilter<"rooms"> | string | null;
    is_active?: Prisma.BoolNullableFilter<"rooms"> | boolean | null;
    created_at?: Prisma.DateTimeNullableFilter<"rooms"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableFilter<"rooms"> | Date | string | null;
}, "id">;
export type roomsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    price_per_night?: Prisma.SortOrder;
    image_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    updated_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.roomsCountOrderByAggregateInput;
    _avg?: Prisma.roomsAvgOrderByAggregateInput;
    _max?: Prisma.roomsMaxOrderByAggregateInput;
    _min?: Prisma.roomsMinOrderByAggregateInput;
    _sum?: Prisma.roomsSumOrderByAggregateInput;
};
export type roomsScalarWhereWithAggregatesInput = {
    AND?: Prisma.roomsScalarWhereWithAggregatesInput | Prisma.roomsScalarWhereWithAggregatesInput[];
    OR?: Prisma.roomsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.roomsScalarWhereWithAggregatesInput | Prisma.roomsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"rooms"> | number;
    name?: Prisma.StringWithAggregatesFilter<"rooms"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"rooms"> | string | null;
    capacity?: Prisma.IntWithAggregatesFilter<"rooms"> | number;
    price_per_night?: Prisma.DecimalWithAggregatesFilter<"rooms"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.StringNullableWithAggregatesFilter<"rooms"> | string | null;
    is_active?: Prisma.BoolNullableWithAggregatesFilter<"rooms"> | boolean | null;
    created_at?: Prisma.DateTimeNullableWithAggregatesFilter<"rooms"> | Date | string | null;
    updated_at?: Prisma.DateTimeNullableWithAggregatesFilter<"rooms"> | Date | string | null;
};
export type roomsCreateInput = {
    name: string;
    description?: string | null;
    capacity: number;
    price_per_night: runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type roomsUncheckedCreateInput = {
    id?: number;
    name: string;
    description?: string | null;
    capacity: number;
    price_per_night: runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type roomsUpdateInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    price_per_night?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type roomsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    price_per_night?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type roomsCreateManyInput = {
    id?: number;
    name: string;
    description?: string | null;
    capacity: number;
    price_per_night: runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: string | null;
    is_active?: boolean | null;
    created_at?: Date | string | null;
    updated_at?: Date | string | null;
};
export type roomsUpdateManyMutationInput = {
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    price_per_night?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type roomsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    price_per_night?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    image_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    created_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    updated_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type roomsOrderByRelevanceInput = {
    fields: Prisma.roomsOrderByRelevanceFieldEnum | Prisma.roomsOrderByRelevanceFieldEnum[];
    sort: Prisma.SortOrder;
    search: string;
};
export type roomsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    price_per_night?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type roomsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    price_per_night?: Prisma.SortOrder;
};
export type roomsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    price_per_night?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type roomsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    price_per_night?: Prisma.SortOrder;
    image_url?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type roomsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    price_per_night?: Prisma.SortOrder;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type roomsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    capacity?: boolean;
    price_per_night?: boolean;
    image_url?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["rooms"]>;
export type roomsSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    capacity?: boolean;
    price_per_night?: boolean;
    image_url?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type roomsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "capacity" | "price_per_night" | "image_url" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["rooms"]>;
export type $roomsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rooms";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string;
        description: string | null;
        capacity: number;
        price_per_night: runtime.Decimal;
        image_url: string | null;
        is_active: boolean | null;
        created_at: Date | null;
        updated_at: Date | null;
    }, ExtArgs["result"]["rooms"]>;
    composites: {};
};
export type roomsGetPayload<S extends boolean | null | undefined | roomsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$roomsPayload, S>;
export type roomsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<roomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RoomsCountAggregateInputType | true;
};
export interface roomsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rooms'];
        meta: {
            name: 'rooms';
        };
    };
    findUnique<T extends roomsFindUniqueArgs>(args: Prisma.SelectSubset<T, roomsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__roomsClient<runtime.Types.Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends roomsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, roomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__roomsClient<runtime.Types.Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends roomsFindFirstArgs>(args?: Prisma.SelectSubset<T, roomsFindFirstArgs<ExtArgs>>): Prisma.Prisma__roomsClient<runtime.Types.Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends roomsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, roomsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__roomsClient<runtime.Types.Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends roomsFindManyArgs>(args?: Prisma.SelectSubset<T, roomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends roomsCreateArgs>(args: Prisma.SelectSubset<T, roomsCreateArgs<ExtArgs>>): Prisma.Prisma__roomsClient<runtime.Types.Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends roomsCreateManyArgs>(args?: Prisma.SelectSubset<T, roomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends roomsDeleteArgs>(args: Prisma.SelectSubset<T, roomsDeleteArgs<ExtArgs>>): Prisma.Prisma__roomsClient<runtime.Types.Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends roomsUpdateArgs>(args: Prisma.SelectSubset<T, roomsUpdateArgs<ExtArgs>>): Prisma.Prisma__roomsClient<runtime.Types.Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends roomsDeleteManyArgs>(args?: Prisma.SelectSubset<T, roomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends roomsUpdateManyArgs>(args: Prisma.SelectSubset<T, roomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends roomsUpsertArgs>(args: Prisma.SelectSubset<T, roomsUpsertArgs<ExtArgs>>): Prisma.Prisma__roomsClient<runtime.Types.Result.GetResult<Prisma.$roomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends roomsCountArgs>(args?: Prisma.Subset<T, roomsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RoomsCountAggregateOutputType> : number>;
    aggregate<T extends RoomsAggregateArgs>(args: Prisma.Subset<T, RoomsAggregateArgs>): Prisma.PrismaPromise<GetRoomsAggregateType<T>>;
    groupBy<T extends roomsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: roomsGroupByArgs['orderBy'];
    } : {
        orderBy?: roomsGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, roomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: roomsFieldRefs;
}
export interface Prisma__roomsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface roomsFieldRefs {
    readonly id: Prisma.FieldRef<"rooms", 'Int'>;
    readonly name: Prisma.FieldRef<"rooms", 'String'>;
    readonly description: Prisma.FieldRef<"rooms", 'String'>;
    readonly capacity: Prisma.FieldRef<"rooms", 'Int'>;
    readonly price_per_night: Prisma.FieldRef<"rooms", 'Decimal'>;
    readonly image_url: Prisma.FieldRef<"rooms", 'String'>;
    readonly is_active: Prisma.FieldRef<"rooms", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"rooms", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"rooms", 'DateTime'>;
}
export type roomsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomsSelect<ExtArgs> | null;
    omit?: Prisma.roomsOmit<ExtArgs> | null;
    where: Prisma.roomsWhereUniqueInput;
};
export type roomsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomsSelect<ExtArgs> | null;
    omit?: Prisma.roomsOmit<ExtArgs> | null;
    where: Prisma.roomsWhereUniqueInput;
};
export type roomsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomsSelect<ExtArgs> | null;
    omit?: Prisma.roomsOmit<ExtArgs> | null;
    where?: Prisma.roomsWhereInput;
    orderBy?: Prisma.roomsOrderByWithRelationInput | Prisma.roomsOrderByWithRelationInput[];
    cursor?: Prisma.roomsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomsScalarFieldEnum | Prisma.RoomsScalarFieldEnum[];
};
export type roomsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomsSelect<ExtArgs> | null;
    omit?: Prisma.roomsOmit<ExtArgs> | null;
    where?: Prisma.roomsWhereInput;
    orderBy?: Prisma.roomsOrderByWithRelationInput | Prisma.roomsOrderByWithRelationInput[];
    cursor?: Prisma.roomsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomsScalarFieldEnum | Prisma.RoomsScalarFieldEnum[];
};
export type roomsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomsSelect<ExtArgs> | null;
    omit?: Prisma.roomsOmit<ExtArgs> | null;
    where?: Prisma.roomsWhereInput;
    orderBy?: Prisma.roomsOrderByWithRelationInput | Prisma.roomsOrderByWithRelationInput[];
    cursor?: Prisma.roomsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RoomsScalarFieldEnum | Prisma.RoomsScalarFieldEnum[];
};
export type roomsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomsSelect<ExtArgs> | null;
    omit?: Prisma.roomsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.roomsCreateInput, Prisma.roomsUncheckedCreateInput>;
};
export type roomsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.roomsCreateManyInput | Prisma.roomsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type roomsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomsSelect<ExtArgs> | null;
    omit?: Prisma.roomsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.roomsUpdateInput, Prisma.roomsUncheckedUpdateInput>;
    where: Prisma.roomsWhereUniqueInput;
};
export type roomsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.roomsUpdateManyMutationInput, Prisma.roomsUncheckedUpdateManyInput>;
    where?: Prisma.roomsWhereInput;
    limit?: number;
};
export type roomsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomsSelect<ExtArgs> | null;
    omit?: Prisma.roomsOmit<ExtArgs> | null;
    where: Prisma.roomsWhereUniqueInput;
    create: Prisma.XOR<Prisma.roomsCreateInput, Prisma.roomsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.roomsUpdateInput, Prisma.roomsUncheckedUpdateInput>;
};
export type roomsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomsSelect<ExtArgs> | null;
    omit?: Prisma.roomsOmit<ExtArgs> | null;
    where: Prisma.roomsWhereUniqueInput;
};
export type roomsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.roomsWhereInput;
    limit?: number;
};
export type roomsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.roomsSelect<ExtArgs> | null;
    omit?: Prisma.roomsOmit<ExtArgs> | null;
};
export {};
