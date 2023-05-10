
// Generated from Structure.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';
import { V, M, R, F } from "./definitions";
import { L, Funnel, Invert, Subject } from "./links";
import Structure from "./structure";

// This class defines a complete generic visitor for a parse tree produced by StructureParser.

export default class StructureVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by StructureParser#struct.
	visitStruct(ctx) {
		return new Structure(this.visitChildren(ctx).slice(0, -1));
	}


	// Visit a parse tree produced by StructureParser#def.
	visitDef(ctx) {
	  	return this.visitChildren(ctx)[0];
	}


	// Visit a parse tree produced by StructureParser#v_def.
	visitV_def(ctx) {
	    return new V(ctx.getChild(2).getText(), this.visitMap_type(ctx.getChild(4)));
	}


	// Visit a parse tree produced by StructureParser#m_def.
	visitM_def(ctx) {
		return new M(ctx.getChild(2).getText(), this.visitMap_type(ctx.getChild(4)));
	}


	// Visit a parse tree produced by StructureParser#r_def.
	visitR_def(ctx) {
		return new R(ctx.getChild(2).getText(), ctx.getChild(4).getText(), ctx.getChild(6).getText(), ctx.getChild(8).getText());
	}


	// Visit a parse tree produced by StructureParser#f_def.
	visitF_def(ctx) {
		return new F(ctx.getChild(2).getText(), ctx.getChild(4).getText(), this.visitField_pair_list(ctx.getChild(6)))
	}


	// Visit a parse tree produced by StructureParser#field_pair_list.
	visitField_pair_list(ctx) {
		let length = ctx.children.length;
		if(length < 3) return [];
		if(ctx.getChild(1).getText() === "*") return ["*"]

		let result = [];
		for(let i=1; i<length; i+=2){
			result.push(this.visitField_pair(ctx.getChild(i)));
		}
		return result;
	}


	// Visit a parse tree produced by StructureParser#field_pair.
	visitField_pair(ctx) {
	  	return {source_field: this.visitFieldRef(ctx.getChild(0)), target_field: this.visitFieldRef(ctx.getChild(2))};
	}


	// Visit a parse tree produced by StructureParser#fieldRef.
	visitFieldRef(ctx) {
		let res = [];
		for(let i=0; i<ctx.children.length; i+=2){
			res.push(ctx.getChild(i).getText());
		}
	}


	// Visit a parse tree produced by StructureParser#field.
	visitField(ctx) {
	  	return {identifier: ctx.getChild(0).getText(), type: this.visitType(ctx.getChild(2))};
	}


	// Visit a parse tree produced by StructureParser#type.
	visitType(ctx) {
	    return this.visitChildren(ctx)[0];
	}


	// Visit a parse tree produced by StructureParser#map_type.
	visitMap_type(ctx) {
		let res = [];
		for(let i = 1; i<ctx.children.length - 1; i+=2) res.push(this.visitField(ctx.getChild(i)))
	    return {type: "map", value: res};
	}


	// Visit a parse tree produced by StructureParser#multi_value.
	visitMulti_value(ctx) {
		return {type: "multi", value: this.visitType(ctx.getChild(1))}
	}


	// Visit a parse tree produced by StructureParser#single_value.
	visitSingle_value(ctx) {
	    return {type: "single", value: ctx.getChild(0).getText()};
	}


	// Visit a parse tree produced by StructureParser#g_def.
	visitL_def(ctx) {
		return new L(this.visitExpr(ctx.getChild(0)), ctx.getChild(2).getText());
	}


	// Visit a parse tree produced by StructureParser#expr.
	visitExpr(ctx) {
	    return this.visitChildren(ctx)[0];
	}


	// Visit a parse tree produced by StructureParser#funnel.
	visitFunnel(ctx) {
		let res = [];
		for(let i = 2; i<ctx.children.length - 1; i += 2) res.push(this.visitExpr(ctx.getChild(i)));
	    return new Funnel(res);
	}


	// Visit a parse tree produced by StructureParser#invert.
	visitInvert(ctx) {
	  	return new Invert(this.visitExpr(ctx.getChild(2)));
	}


	// Visit a parse tree produced by StructureParser#subject.
	visitSubject(ctx) {
	  	return new Subject(ctx.getChild(0).getText())
	}



}
